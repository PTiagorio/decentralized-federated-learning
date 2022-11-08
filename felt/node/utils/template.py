"""Module providing TemplateResponse for route response."""
from pathlib import Path

from starlette.templating import Jinja2Templates

main_folder = Path(__file__).parent.parent
templates = Jinja2Templates(directory=main_folder / "templates")

TemplateResponse = templates.TemplateResponse
