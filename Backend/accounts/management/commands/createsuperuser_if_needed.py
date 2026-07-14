import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Create a superuser if one does not already exist."

    def handle(self, *args, **options):
        User = get_user_model()

        username = os.getenv("DJANGO_SUPERUSER_USERNAME", "admin")
        email = os.getenv("DJANGO_SUPERUSER_EMAIL", "admin@example.com")
        password = os.getenv("DJANGO_SUPERUSER_PASSWORD", "1234")

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.WARNING("Superuser already exists."))
            return

        User.objects.create_superuser(
            username=username,
            email=email,
            password=password,
        )

        self.stdout.write(self.style.SUCCESS("Superuser created successfully."))