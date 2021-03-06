from django.apps import AppConfig

class SailbotConfig(AppConfig):
    name = 'sailbot'
    verbose_name = "My Application"
   # def ready(self):
   #     from threading import Thread
   #     thread = Thread(target=sailbot.network_table.index)
   #     thread.start()
