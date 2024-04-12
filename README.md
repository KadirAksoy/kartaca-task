## Kartaca Çekirdekten Yetişenler Programı Yazılım Geliştirme Projesi


# Açıklama 
<span>Projeyi yaparken Apache Flink kullanılması gerekiyordu maalesef flink kullanarak bu projeyi yapamadım dökümanları ve youtube'ı kaynak olarak kullandım fakat yinede istenilen görevi yapamadım. Projeyi normalde teslim etmeyecektim fakat Linkedinde proje bitmemiş olsa bile gönderebilirsiniz şeklinde bir gönderi gördüm bu yüzden göndermek istedim. Projede Apache Kafka ile kuyruklama sistemi kullandım. </span>

# Frontend

>Frontend klasörünün içindeki map-app dosyası içerisine girerek aşağıdaki kodları çalıştırarak uygulamanın arayüzüne ulaşabilir.
```
npm install && npm run dev
```

# Görseller 
>Şiddeti 7 ve 7 den büyük depremler ekranda 7 saniye işaretlenmiş olarak kalıyor.

<span>Deprem yaratma: lat,lon,şiddet bilgilerini giriyoruz ardından deprem yaratma tuşuna basarak backend servisimize istek atıp deprem verisini kaydetmiş oluyoruz.</span>
![deprem-yarat](https://github.com/KadirAksoy/kartaca-task/assets/90133005/07080118-10ca-4ee4-9211-a671452f187f)
![deprem-yarat-2](https://github.com/KadirAksoy/kartaca-task/assets/90133005/7c0ec7dc-dc0d-438c-a59a-e5cb074bac0e)


<span>Random deprem yaratma: Random deprem başlat butonuna basarak her 0.5 saniyede bir rastgele lat,lon,şiddet oluşturarak deprem verisini kaydediyor. Tekrardan butona basarsak ise random deprem oluşturmayı bırakıyor.</span>

![random-deprem-yarat](https://github.com/KadirAksoy/kartaca-task/assets/90133005/821dde1f-3729-4b72-aed6-fdd343c6d63e)
![random-deprem-yarat-2](https://github.com/KadirAksoy/kartaca-task/assets/90133005/c0a22f92-5a60-4d6a-a30f-58e8746bbb92)

# Backend

>Kartaca-backend klasörü içine girerek aşağıdaki kodları çalıştırarak uygulamanın backend tarafı çalıştırılabilir. Kodların içindeki application.yml dosyasındaki database bağımlılıkları değiştirilmelidir.
```
mvn clean install && docker-compose up -d
```
# Görseller 
>Deprem yaratma işlemi
![deprem-yarat-log](https://github.com/KadirAksoy/kartaca-task/assets/90133005/539209af-f618-46dd-889c-e4e3471a3e26)
>Random deprem yaratma işlemi
![random-deprem-yarat-log](https://github.com/KadirAksoy/kartaca-task/assets/90133005/5a6e35ba-ae40-4da6-9793-f7bc63d34c01)
>Docker container 
![docker-compose-yml](https://github.com/KadirAksoy/kartaca-task/assets/90133005/f783536c-cc67-4963-bb40-ad7febdb7eab)



