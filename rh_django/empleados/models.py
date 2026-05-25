from django.db import models
from django.core.validators import MinValueValidator


class Empleado(models.Model):

    idEmpleado = models.AutoField(
        primary_key=True
    )

    nombre = models.CharField(
        max_length=100,
        null=False,
        blank=False
    )

    departamento = models.CharField(
        max_length=100,
        null=False,
        blank=False
    )

    sueldo = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0.01)]
    )

    class Meta:
        db_table = 'empleado'

    def __str__(self):
        return self.nombre