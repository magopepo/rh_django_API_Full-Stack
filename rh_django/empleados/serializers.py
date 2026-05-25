from rest_framework import serializers
from .models import Empleado


class EmpleadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleado
        fields = '__all__'

    def validate_nombre(self, value):

        if not value.strip():
            raise serializers.ValidationError(
                'El nombre es obligatorio.'
            )

        return value

    def validate_departamento(self, value):

        if not value.strip():
            raise serializers.ValidationError(
                'El departamento es obligatorio.'
            )

        return value

    def validate_sueldo(self, value):

        if value <= 0:
            raise serializers.ValidationError(
                'El sueldo debe ser mayor a 0.'
            )

        return value