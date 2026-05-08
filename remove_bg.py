import sys
from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # item is (R, G, B, A)
        r, g, b, a = item
        # Calculate perceived luminance or max channel as alpha
        luminance = max(r, g, b)
        
        # Boost alpha slightly to retain faint glowing edges, but clip to 255
        alpha = min(255, int(luminance * 1.5))
        
        # Keep original color but with computed transparency
        newData.append((r, g, b, alpha))

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python remove_bg.py <input> <output>")
        sys.exit(1)
    process_image(sys.argv[1], sys.argv[2])
