from .color_class import ColorClass


class BYPalette:
    yellow = ColorClass({"main": "#E5B700", "dark": "#CE9A0E", "light": "#FFE066"})
    blue = ColorClass({"main": "#0050A0", "dark": "#092B61", "light": "#3A8FE4"})
    red = ColorClass({"main": "#E84A33", "dark": "#A4220F", "light": "#F48D7E"})
    green = ColorClass({"main": "#60AE60", "dark": "#2E6E2E", "light": "#95D395"})
    purple = ColorClass({"main": "#A957BE", "dark": "#7C2377", "light": "#E093F4"})
    orange = ColorClass({"main": "#FF8029", "dark": "#DC5900", "light": "#FFC29D"})
    grey = ColorClass({"main": "#808080", "dark": "#202020", "light": "#A2A2A2"})
    brown = ColorClass({"main": "#84451E", "dark": "#59280A", "light": "#A56034"})
    pink = ColorClass({"main": "#E961B9", "dark": "#A91374", "light": "#F6B0DD"})
    violet = ColorClass({"main": "#4E326C", "dark": "#3C124C", "light": "#9C7DBE"})
    cyan = ColorClass({"main": "#3DCFCF", "dark": "#1A7C7F", "light": "#80E2E5"})
    black = ColorClass({"main": "#000000"})
    white = ColorClass({"main": "#FFFFFF"})
    transparent = ColorClass({"main": (1, 1, 1, 0)})
