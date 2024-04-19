### Rabbitmq nedir?
RabbitMQ erlang dili ile yazılmış open source bir message brokerdır. Amacı bir yerden aldığı veriyi (Producer) kendine abonman olan başka bir yere (Consumer) **SIRAYLA** teslim etmektedir. Alternatifleri Microsof Azure Service Bus, Apache Kafka,Msmq. 

Genel olarak “Message broker”lar; anlık yapılmaya ihtiyaç olmayan işlemlerde kullanılması(Mail veya sms gönderimi, e-ticaret projelerinde sipariş sonrası fatura kesilmesi veya kargo entegrasyon işlemlerinin yapılması) ile ön planda olsa Scalable(ölçeklenebilir) uygulamaların olmazsa olmazıdır denilebir.

Direk olarak AMQP (Advanced message Queue Protokol) desteklemek ile birlikte pluginler vasıtasıyla STOP (Simple or (Streaming) Text Orientated Messaging Protokol) gibi bir çok Messaging protokolu desteklemektedir.

Publisher(Producer) veriyi direk olarak “queue” ya değil excehange üzerinden iletmektedir. Yani aslında publisher “queue” yi bilmemektedir.Mesaj exchange üzerinden routing key’e göre “queue” ya iletilmektedir.

### Rabbitmq Terimleri
**Producer (Publisher):** Mesajı oluşturan, gönderen veya sağlayan taraftır.

**Consumer:** Abone olduğu “queue” dan veriyi alıp işleyen tüketen taraftır.

**Queue:** Mesajın eklendiği ve Consumer tarafından abone olan kuyruktur.

**Exchange:** Mesajı yönlendirme için aracı olarak kullanılır. Producer tarafından “exchance” e iletilen mesaj, Exchange type(Header attribute), binding ve routing key yardımı ile queue iletmektedir.

**Exchance Type:** Mesajın hangi “queue”ya ne şekilde iletileceğini belirtir.

**Binding:** Exchance ve queue arasındaki bağlantıdır.

### Docker command
```
docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 rabbitmq:3-management
```
- Visit localhost:8080
- username: guest
- password: guest