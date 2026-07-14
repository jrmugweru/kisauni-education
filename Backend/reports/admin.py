

# Register your models here.
from django.contrib import admin
from .models import Report

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "school",
        "category",
        "status",
        "created_at",
    )

    list_filter = (
        "category",
        "status",
    )

    search_fields = (
        "name",
        "school",
    )