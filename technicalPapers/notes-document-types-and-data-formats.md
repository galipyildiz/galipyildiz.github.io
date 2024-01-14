Document Types And Data Formats

Bit = Binary Digit 1/0

Byte = 8 Bit 11001100

-----

**Binary Sayı Sistemi**

Octal(Sekizlik) Sayı Sistemi => Eski sistemlerde bellek adresleme, Linux sistemlerde dosya izinleri

Decimal(Onluk) Sayı Sistemi => IPV4, RGB renk kod

Hexadecimal(Onaltılık) Sayı Sistemi 0123456789ABCDEF => Bellek adresleme, Renk kodları, IPV6, karakter kodlama

----

**Karakter Kodlama Setleri**

Encoding(Karakter Kodlama) Amaç karakterlerin aktarılması , Sayı sistemleri kullanılarak yapılır.

- ASCII Standartı (American Standart Code for Information Interchange)
    - ANSI (American National Standarts Institute) tarafından 1963 yılında yayımlanmıştır.
    - 7 bit ile ifade edilir.
    - 128 karakterden oluşur. 2^7. 33 Basılmayan, 95 basılan karakter vardır. 
    - Türkçe harfler bulunmaz.

- LATIN-1 
    - ISO (International Organization for Standardization) tarafından çıkarılmıştır.
	- ISO-8859-1 ve ISO Latin-1 ismi ilede bilinir. Flemenkçe, Fransızca, Almanca, İtalyanca, Portekizce, İspanyolca gibi dilleri konuşan bazı batı avrupa dilleri için çıkarılmıştır.
    - 8 Bit-1 Byte.	256 Karakter. 
    - ASCII'nin genişletilmiş halidir. 
    - Bazı Türkçe karakterleri içermez.

- LATIN-5 
    - ISO (International Organization for Standardization) tarafından çıkarılmıştır.
    - ISO-8859-9 Türkçeye özel olarak çıkartılmış bir kodlama setidir.
    - 8 Bit - 1 Byte. 256 Karakter.
    - İlk 128 ASCII ile aynı.

- LATIN-9 
    - ISO (International Organization for Standardization) tarafından çıkarılmıştır.
    - ISO-8859-15 ismi ilede bilinir.
    - 8 Bit - 1 Byte
    - Avrupa dillerine özel olarak çıkartılmıştır. € simgesi gelmiştir.
	
- Windows-1254 
    - Microsoft firması tarafından türkçe için geliştirilmiştir.
    - Windows tabanlı uygulamalar ve web dünyasında kullanılmıştır.
    - 8 Bit - 1 Byte. 256 karakter. 
    - ASCII ile 128 karakter ortaktır.

- Unicode Standartı (Evrensel Kod) 
    - Unicode Concortium tarafından çıkarılmıştır.
    - Çözdüğü sorunlar Farklı dillere ait karakterler, Karakter sayısı fazla olan diller.
    - Karakterler sayısal değerler ile ifade edilir. Amacı tüm karakter setlerini bir arada toplamaktır.
    - Hexadecimal sayı sistemi ile temsil edilmektedir.
    - 1.114.112 kod noktası vardır. Tamamı dolu değildir. Sürekli geliştirilmektedir.
    - U+000045 => U+ , 00 düzlem noktası, 0045 kod noktası olarak temsil edilir. 15. ve 16. düzleme kullanıcıların ve orginazyonların karakter eklemesine izin verilmiştir.

- UTF-32 , UTF-16, UTF-8 (Unicode standartlarının uygulanış biçimleri) UTF = Unicode Transformation Format
	
    - UTF-32 = 32 bit/4byte bellek kullanımı fazladır.

    ```
		E harfi 
			00000045
			00000000 00000000 00000000 01000101 => 25 bit gereksiz.
		😀 
			0001F600
			00000000 00000001 11110110 00000000 => 15 bit gereksiz.
    ```
    - UTF-16 = 2byte veya 4 byte

    ```
		E harfi 
			0045
			00000000 01000101 => 16 bit kazanç UTF-32 ye göre.
		😀 
			d83d de00
			11011000 00111101 11011110 00000000 => 16 bit yeterli gelmediği için 32 bit kullanılmıştır.
    ```

    - UTF-8 (En çok kullanılan)
        - UTF-16 ve UTF-32 gereksiz bellek kullanımı sorunu ortaya çıktı.
        - Unicode standardını uygular. 1-4 byte ile ifade edilir.
        - Web, masaüstü, mobile, veri tabanı sistemleri, programlama dilleri.
        
        ```
        Hello => UTF-32 = 20 Byte (160 Bit) , UTF-16 = 10 Byte(80) , UTF-8 = 5 Byte (40 Bit)
        ```
----

Dökman tipi bir belgenin türünü ve formatını ifade eder. Verilerin nasıl işleneceğini ve görüntüleneceğini belirtir. Genellikle dosya uzantısı ile ilişkilidir.

- İşaretleme dilleri => html, xml, md, latex
- Api ve konfigurasyon => xml, json, yaml
- Veritabanı ve yedekleme => sql, db
- Günlük dosyaları => log
- Dökümantasyon ve kılavuz => md, pdf, docx
- Programlama dilleri => cs, c, cpp, js ...

- Düz metin = biçimlendirme ve stil özellikleri içermez. Genellikle .txt'dir. Sadece metin. 
    - Kontrol karakterleri
        - Yeni satır \n, Taşıma işareti \r, Sekme \t, Geri silme \b, sayfa kesme \f
    - Windows => not defteri
    - Linux => Kate, gedit
    - Mac => TextEdit