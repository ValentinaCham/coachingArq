from django.db import models

# Create your models here.

class FotoGaleria(models.Model):
    imagen = models.ImageField(upload_to='pics')
    descripcion = models.TextField()