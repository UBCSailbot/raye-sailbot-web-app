from django.apps import AppConfig

class SailbotConfig(AppConfig):
    name = 'sailbot'
    verbose_name = "My Application"
    def ready(self):
       # from threading import Thread
       # import sailbot.network_table.index
       # thread = Thread(target=sailbot.network_table.index.subscribe)
       # thread.start()
        from models import Wind
        Wind.objects.filter(pk=1).update(WindSpeed=3731)
