## Kartaca Çekirdekten Yetişenler Programı Yazılım Geliştirme Projesi



# Frontend

Projeye erişmek için `frontend` klasöründeki `map-app` dosyasına girerek aşağıdaki komutları çalıştırabilirsiniz:
```
npm install && npm run dev
```

# Görseller 
Şiddeti 7 ve 7'den büyük depremler ekranda 7 saniye boyunca işaretlenir.

Deprem yaratma: Latitude, longitude ve şiddet bilgilerini girerek deprem yaratma tuşuna basarak backend servisimize istek atabiliriz ve deprem verisini kaydedebiliriz.

![deprem-yarat](https://github.com/KadirAksoy/kartaca-task/assets/90133005/07080118-10ca-4ee4-9211-a671452f187f)
![deprem-yarat-2](https://github.com/KadirAksoy/kartaca-task/assets/90133005/7c0ec7dc-dc0d-438c-a59a-e5cb074bac0e)

Random deprem yaratma: Her 0.5 saniyede bir rastgele latitude, longitude ve şiddet oluşturarak deprem verisini kaydedebiliriz. Tekrar başlat butonuna basarak random deprem oluşturmayı durdurabiliriz.

![random-deprem-yarat](https://github.com/KadirAksoy/kartaca-task/assets/90133005/821dde1f-3729-4b72-aed6-fdd343c6d63e)
![random-deprem-yarat-2](https://github.com/KadirAksoy/kartaca-task/assets/90133005/c0a22f92-5a60-4d6a-a30f-58e8746bbb92) 




# Kartaca-backend 

Bu kılavuz, Kartaca-backend projesinin nasıl çalıştırılacağı ve servis metodlarının nasıl kullanılacağı hakkında bilgi vermektedir.

## Backend'i Çalıştırma

Kartaca-backend klasörüne gidin ve aşağıdaki komutları çalıştırarak uygulamanın backend tarafını başlatabilirsiniz. Öncelikle, `application.yml` dosyasındaki veritabanı bağımlılıklarını kendi ortamınıza uygun şekilde değiştirmeniz gerekmektedir.
```
mvn clean install && docker-compose up -d
```


## Servis Metodları

Kartaca-backend uygulaması, aşağıdaki servis metodlarına sahiptir:

### Random Script Oluşturma

Random Script metodunu kullanarak, `localhost:8080/api/script/randomScript` adresine GET isteği göndererek rastgele bir latitude, longitude ve şiddet değeri oluşturabilirsiniz.

### Script Gönderme

Script gönderme metodunu kullanarak, `localhost:8080/api/script/sent` adresine POST isteği göndererek belirtilen latitude, longitude ve şiddet verilerini ekleyebilirsiniz. Veriyi JSON formatında göndermelisiniz. Örnek JSON yapısı aşağıdaki gibidir:

```json
{
    "lat": 5,
    "lon": 5,
    "intensity": 5
}
```

# Görseller

>Deprem yaratma işlemi
![deprem-yarat-log](https://github.com/KadirAksoy/kartaca-task/assets/90133005/539209af-f618-46dd-889c-e4e3471a3e26)
>Random deprem yaratma işlemi
![random-deprem-yarat-log](https://github.com/KadirAksoy/kartaca-task/assets/90133005/5a6e35ba-ae40-4da6-9793-f7bc63d34c01)
>Docker container 
![docker-compose-yml](https://github.com/KadirAksoy/kartaca-task/assets/90133005/f783536c-cc67-4963-bb40-ad7febdb7eab)


# Kafka
http://localhost:9091/  adresine giderek kafka-ui eklentisi ile produce ve consume edilen verilerin takibini yapabilirsiniz.



![kafka-3](https://github.com/KadirAksoy/kartaca-task/assets/90133005/357805d1-e0a1-4637-8d12-3adbf745289d)


