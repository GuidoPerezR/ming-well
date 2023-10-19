from django.db.models import *


# Create your models here.
class Drawings(Model):
    name = CharField("Nombre del Dibujo", max_length=150, blank=True)
    author = CharField("Autor", max_length=100, blank=True)
    image = ImageField(
        "Foto del dibujo", upload_to="images/drawings/", null=True, blank=True
    )

    class Meta:
        verbose_name = "Dibujo"
        verbose_name_plural = "Dibujos"

    def __str__(self):
        return self.name
