from PIL import Image, ImageDraw, ImageFont

NAVY = (13, 24, 42, 255)
GREEN = (76, 175, 80, 255)

FONT_PATH = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"
font = ImageFont.truetype(FONT_PATH, 90)

# Usa el icono oficial ya copiado en public/assets/conexco-isotipo.png
icon_full = (
    Image.open("public/assets/conexco-isotipo.png")
    .convert("RGBA")
    .resize((140, 140), Image.LANCZOS)
)

tmp = Image.new("RGBA", (10, 10))
d_tmp = ImageDraw.Draw(tmp)
text1, text2 = "CONEX", "CO"
w1 = d_tmp.textlength(text1, font=font)
w2 = d_tmp.textlength(text2, font=font)

pad = 24
canvas_w = int(140 + pad + w1 + w2 + 20)
canvas_h = 160
logo = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
logo.paste(icon_full, (0, (canvas_h - 140) // 2), icon_full)

d = ImageDraw.Draw(logo)
text_y = (canvas_h - 90) // 2 - 14
x = 140 + pad
d.text((x, text_y), text1, font=font, fill=NAVY)
d.text((x + w1, text_y), text2, font=font, fill=GREEN)

logo.save("public/assets/conexco-logo.png")

print("OK")
