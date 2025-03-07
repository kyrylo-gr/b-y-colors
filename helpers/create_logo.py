import os

import matplotlib.pyplot as plt
import bycolors as byc


def create_logo(filepath: str, aspect_ratio: float = 1):
    fig, ax = plt.subplots(figsize=(10, 10 * aspect_ratio))
    ax.add_patch(plt.Polygon([[0, 0], [1, 1], [0, 1]], color=byc.colors.blue))
    ax.add_patch(plt.Polygon([[0, 0], [1, 0], [1, 1]], color=byc.colors.yellow))

    ax.set(
        xlim=(0, 1),
        ylim=(0, 1),
        xticks=[],
        yticks=[],
    )
    ax.axis("off")

    fig.savefig(filepath, bbox_inches="tight", dpi=300, transparent=True)


if __name__ == "__main__":
    output_dir = os.path.join(os.path.dirname(__file__), "../docs/assets")
    create_logo(os.path.join(output_dir, "logo.png"))
    create_logo(os.path.join(output_dir, "logo_horizontal.png"), aspect_ratio=0.25)
