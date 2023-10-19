from rest_framework.serializers import ModelSerializer
from apps.api.users.models import User


class UserSerializer(ModelSerializer):
    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data["password"])
        updated_user.save()
        return updated_user

    def to_representation(self, instance: User):
        return {
            "id": instance.pk,
            "username": instance.username,
            "password": instance.password,
            "first_name": instance.first_name,
            "last_name": instance.last_name,
            "second_last_name": instance.second_last_name,
            "email": instance.email,
            "gender": instance.gender,
            "cell_phone": instance.cell_phone,
            "dob": instance.dob,
            "image": instance.image if instance.image else None,
            "tutor_name": instance.tutor_name,
            "tutor_last_name": instance.tutor_last_name,
            "tutor_second_last_name": instance.tutor_second_last_name,
            "tutor_gender": instance.tutor_gender,
            "tutor_cell_phone": instance.tutor_cell_phone,
            "tutor_dob": instance.tutor_dob,
            "tutor_address": instance.tutor_address,
        }

    class Meta:
        model = User
        exclude = (
            "last_login",
            "is_superuser",
            "groups",
            "user_permissions",
            "is_active",
            "is_staff",
        )
