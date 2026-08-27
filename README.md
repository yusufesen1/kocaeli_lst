# Kocaeli-Gebze Kentsel Isı Adası Analizi (2016–2025)

**Sanayileşmenin Kentsel Isı Adası Oluşumuna Etkisi: Kocaeli-Gebze Örneği**

Bu proje, hızla sanayileşen kentsel alanlarda yüzey sıcaklığının (LST) zaman içinde nasıl değiştiğini ve bu değişimin sanayileşmeyle ilişkisini mekânsal olarak incelemeyi amaçlayan bir CBS (Coğrafi Bilgi Sistemleri) çalışmasıdır. Çalışma alanı olarak Türkiye'nin en yoğun sanayi ilçelerinden biri olan **Gebze (Kocaeli)** seçilmiştir.

---

## Projenin Amacı

Sanayi yoğunluğu ile yüzey sıcaklığı arasındaki ilişkiyi mekânsal olarak görünür kılmak. Gebze; kuzeyinde orman alanları, ortasında yoğun yerleşim, güneyinde sanayi yapılaşması ve kıyı şeridini bir arada barındırdığından, farklı arazi kullanımlarının termal etkisini kısa mesafede karşılaştırmalı incelemeye elverişli bir pilot alan olarak seçilmiştir (Gebze OSB, GEPOSB, TAYSAD, TOSB gibi organize sanayi bölgelerine ev sahipliği yapmaktadır).

## Yöntem

1. **Veri temini:** 2016 ve 2025 yıllarına ait Landsat 8/9 uydu görüntüleri, USGS EarthExplorer üzerinden temin edildi.
2. **LST hesaplama:** Termal kızılötesi bant (Band 10) kullanılarak QGIS'te Raster Calculator ile yüzey sıcaklığı (°C) hesaplandı, ardından Gebze sınırlarına kırpıldı.
3. **Hexagonal grid:** Mekânsal analizi standartlaştırmak için Gebze, 500 m kenar uzunluğunda altıgen grid hücrelerine bölündü (kare hücrelere kıyasla daha düzgün komşuluk ilişkisi ve web görselleştirmede verimlilik sağladığı için tercih edildi).
4. **Zonal Statistics:** Her altıgen hücreye, içerdiği piksellerin ortalama LST, NDVI ve NDBI değerleri atanarak raster veriler vektör tabanlı bir analiz katmanına dönüştürüldü.
5. **Korelasyon analizi:** LST ile NDVI (bitki örtüsü) ve NDBI (yapılaşma) arasındaki istatistiksel ilişki hesaplandı.

## Bulgular

- Gebze'nin sanayi yoğun **güney bölgeleri**, kuzeydeki orman alanlarına kıyasla belirgin biçimde daha yüksek yüzey sıcaklığına sahip.
- **NDBI–LST** arasında güçlü pozitif ilişki: **R² = 0.76** (yapılaşma arttıkça sıcaklık artıyor).
- **NDVI–LST** arasında güçlü negatif ilişki: **R² = 0.71** (bitki örtüsü serinletici etki yaratıyor).
- 9 yıllık süreçte NDVI–LST ilişkisi belirgin biçimde güçlendi: **R² 0.41 (2016) → 0.71 (2025)** — bu, kentleşme ve sanayileşmeyle birlikte arazi örtüsündeki termal kontrastın keskinleştiğini gösteriyor.

**Sonuç:** Sanayileşme, Gebze'de kentsel ısı adası etkisini hem mekânsal hem zamansal olarak derinleştirmektedir. Yeşil alan koruması ve sürdürülebilir planlama, kentsel termal dengenin sağlanması açısından kritik önem taşımaktadır.

## Proje Yapısı

```
├── index.html      # Etkileşimli web haritası (QGIS2web + OpenLayers çıktısı)
├── layers/         # Hexagonal grid ve LST/NDVI/NDBI katmanları
├── styles/         # Harita stil dosyaları
├── resources/      # Görsel ve yardımcı kaynaklar
└── webfonts/       # Harita arayüzü font dosyaları
```

## Kullanılan Araç ve Veriler

- **Uydu verisi:** Landsat 8/9 (USGS EarthExplorer, Level-2)
- **CBS yazılımı:** QGIS (Raster Calculator, Create Grid, Zonal Statistics, Print Layout)
- **Web haritası:** QGIS2web ile üretilen OpenLayers tabanlı arayüz
- **İndeksler:** LST (Land Surface Temperature), NDVI, NDBI

## Yol Haritası

- [ ] Etkileşimli web haritasında altıgen hücrelere tıklayarak LST/NDVI/NDBI değerlerini ve yıllar arası değişimi gösterme
- [ ] OSM ve uydu görüntüsü altlıkları arasında geçiş
- [ ] Sanayi alanları ve OSB vektör katmanlarının analize eklenmesi

## Ekip

Bu proje, **OpenGIS Türkiye – Açık Kaynak CBS Kullanıcıları Topluluğu** kapsamında **Takım 2** tarafından, CBS Atölyesi final projesi olarak hazırlanmıştır.

---

*Sunum: [Sprint Review](./kocaeli_lst.pptx)*
