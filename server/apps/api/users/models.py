from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)
from django.db.models import *


class UserManager(BaseUserManager):
    def _create_user(
        self,
        username,
        email,
        first_name,
        last_name,
        password,
        is_staff,
        is_superuser,
        **extra_fields,
    ):
        user = self.model(
            username=username,
            email=email,
            first_name=first_name,
            last_name=last_name,
            is_staff=is_staff,
            is_superuser=is_superuser,
            **extra_fields,
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(
        self, username, email, first_name, last_name, password=None, **extra_fields
    ):
        return self._create_user(
            username,
            email,
            first_name,
            last_name,
            password,
            False,
            False,
            **extra_fields,
        )

    def create_superuser(
        self, username, email, first_name, last_name, password=None, **extra_fields
    ):
        return self._create_user(
            username, email, first_name, last_name, password, True, True, **extra_fields
        )


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    username = CharField(max_length=255, unique=True)
    first_name = CharField("Nombre(s)", max_length=50)
    last_name = CharField("Apellido Paterno", max_length=50)
    second_last_name = CharField("Apellido Materno", max_length=50)
    gender = CharField("Genero", max_length=20, null=True)
    cell_phone = CharField("Teléfono", max_length=15, blank=True, null=True)
    email = EmailField("Correo", null=True)
    dob = DateField("Fecha de nacimiento", null=True)
    image = ImageField(
        "Foto de perfil",
        upload_to="drawings/users/",
        max_length=255,
        null=True,
        blank=True,
    )
    is_active = BooleanField(default=True)
    objects = UserManager()
    is_staff = BooleanField(default=False)

    """Datos Familiares"""
    tutor_name = CharField("Nombre(s)", max_length=50)
    tutor_last_name = CharField("Apellido Paterno", max_length=50)
    tutor_second_last_name = CharField("Apellido Materno", max_length=50)
    tutor_gender = CharField("Genero", max_length=20, null=True)
    tutor_cell_phone = CharField("Teléfono", max_length=15, blank=True, null=True)
    tutor_dob = DateField("Fecha de nacimiento", null=True)
    tutor_address = CharField("Dirección", max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "first_name", "last_name", "second_last_name"]


def __str__(self):
    return f"{self.first_name} {self.last_name}"
