# from django.db import models

# class Report(models.Model):

#     STATUS = (
#         ("Pending", "Pending"),
#         ("Resolved", "Resolved"),
#     )

#     reporter_name = models.CharField(max_length=150)

#     email = models.EmailField(blank=True)

#     phone = models.CharField(max_length=20, blank=True)

#     school = models.CharField(max_length=200)

#     category = models.CharField(max_length=150)

#     message = models.TextField()

#     status = models.CharField(
#         max_length=20,
#         choices=STATUS,
#         default="Pending",
#     )

#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.reporter_name
from django.db import models

class Report(models.Model):

    CATEGORY_CHOICES = [
        ("Complaint", "Complaint"),
        ("Suggestion", "Suggestion"),
        ("School Issue", "School Issue"),
        ("Teacher Issue", "Teacher Issue"),
        ("Infrastructure", "Infrastructure"),
        ("Other", "Other"),
    ]

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Reviewed", "Reviewed"),
        ("Resolved", "Resolved"),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    school = models.CharField(max_length=200)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
    )

    description = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.school}"