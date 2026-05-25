from django.urls import path
from .views import (
    EmpleadoListCreateView,
    EmpleadoDetailView
)

urlpatterns = [

    path(
        '',
        EmpleadoListCreateView.as_view(),
        name='empleados-list-create'
    ),

    path(
        '<int:idEmpleado>/',
        EmpleadoDetailView.as_view(),
        name='empleado-detail'
    ),
]