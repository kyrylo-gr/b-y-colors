---
title: Color Class
---

The `ColorClass` is the core class of the bycolors package, providing a rich interface for color manipulation and transformation.

## Constructor

```python
ColorClass(palette: Union[str, Tuple[float, float, float], Dict], background_color: Optional[Tuple[float, float, float]] = None)
```

### Parameters

- `palette`: The color value. Can be:
    - A hex string (e.g., "#FF0000")
    - An RGB/RGBA tuple (e.g., (1, 0, 0) or (1, 0, 0, 1))
    - A dictionary with 'main', 'dark', and 'light' variants

- `background_color`: Optional RGB tuple for alpha compositing. Defaults to white (1, 1, 1)

## Properties

### Color Variants

- `.dark`: Get a darker variant of the color (35% brightness if not specified in palette)
- `.light`: Get a lighter variant of the color (65% brightness if not specified in palette)
- `.main`: Get the main color instance
- `.transparent`: Get a fully transparent version of the color

### Color Formats

- `.rgb`: Get RGB values (0-1 range)
- `.rgba`: Get RGBA values (0-1 range)
- `.hex`: Get hexadecimal color string

## Methods

### Opacity Control

```python
.opacity(opacity: float, background_color: Optional[Tuple[float, float, float]] = None)
.alpha(alpha: float, background_color: Optional[Tuple[float, float, float]] = None)  # alias for opacity
```

Control the transparency of the color. Values range from 0 (transparent) to 1 (opaque).

### Brightness Control

```python
.brightness(brightness: float)  # Relative brightness change
.absolute_brightness(brightness: float)  # Absolute brightness value
```

Adjust the color brightness:
- `brightness()`: Values < 0.5 darken, > 0.5 lighten
- `absolute_brightness()`: Set exact brightness (0 = black, 1 = white)

## Examples

```python
# Create a color
blue = ColorClass("#0000FF")

# Get variants
dark_blue = blue.dark
light_blue = blue.light

# Modify opacity
semi_transparent = blue.opacity(0.5)
semi_transparent_on_black = blue.opacity(0.5, background_color=(0, 0, 0))

# Adjust brightness
darker = blue.brightness(0.3)
specific_brightness = blue.absolute_brightness(0.7)

# Get color values
rgb = blue.rgb        # (0, 0, 1)
rgba = blue.rgba      # (0, 0, 1, 1)
hex_color = blue.hex  # "#0000FF"
```



<!-- prettier-ignore -->
::: bycolors.color_class.ColorClass
    <!-- options:
      show_bases: false
      show_root_heading: false
      summary: false -->
