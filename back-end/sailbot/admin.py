from django.apps import apps
from django.contrib import admin
from django.contrib.admin.sites import AlreadyRegistered

# Register your models here.
sailbot_models = apps.get_app_config('sailbot').get_models()
for model in sailbot_models:
    try:
        admin.site.register(model)
    except AlreadyRegistered:
        pass
