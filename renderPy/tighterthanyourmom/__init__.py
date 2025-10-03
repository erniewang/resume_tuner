from typing import Literal

from rendercv.themes.options import ThemeOptions, theme_options_theme_field_info

theme_options_theme_field_info.default = "classic"


class TighterthanyourmomThemeOptions(ThemeOptions):
    theme: Literal["tighterthanyourmom"] = theme_options_theme_field_info
