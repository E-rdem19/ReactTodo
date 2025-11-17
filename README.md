# ReactTodo

Basit, sade ve kullanışlı bir yapılacaklar (todo) uygulaması — React ile geliştirilmiş bir örnek proje.

## Açıklama
ReactTodo, kullanıcıların görev ekleyip, düzenleyip, silebildiği ve tamamlanan görevleri işaretleyebildiği küçük bir React uygulamasıdır. Eğitim amaçlı veya hızlı prototipleme için uygundur.

## Özellikler
- Görev ekleme
- Görev düzenleme
- Görev silme
- Görevi tamamlandı olarak işaretleme
- Basit filtreleme (tümü / tamamlanan / aktif) — (varsayılan olarak)
- Değişikliklerin tarayıcıda kalıcı olması için localStorage kullanımı (varsa)

> Not: Projedeki gerçek özellikler uygulama versiyonuna göre değişebilir. README'yi isterseniz proje dosyalarına göre özelleştirebilirim.

## Teknolojiler
- React (veya Create React App / Vite ile oluşturulmuş olabilir)
- JavaScript / JSX
- CSS (veya proje içindeki stil yaklaşımı)

## Gereksinimler
- Node.js (>= 14 önerilir)
- npm veya yarn

## Kurulum (yerel geliştirme)
1. Depoyu klonlayın:
   git clone https://github.com/E-rdem19/ReactTodo.git

2. Proje dizinine gidin:
   cd ReactTodo

3. Bağımlılıkları yükleyin:
   npm install
   veya
   yarn

4. Geliştirme sunucusunu başlatın:
   npm start
   veya
   yarn start

Tarayıcınızda genellikle http://localhost:3000 adresinde uygulama çalışacaktır.

## Yapı (production build)
Üretim için derleme yapmak üzere:
npm run build
veya
yarn build

Derlenmiş dosyalar `build/` (veya Vite kullanıldıysa `dist/`) klasöründe oluşacaktır. Bu klasörü tercih ettiğiniz sunucuya deploy edebilirsiniz.

## Testler
Varsa test çalışma komutu:
npm test
veya
yarn test

(Eğer proje test içermiyorsa bu bölümü kaldırabilirsiniz.)

## Kullanım
- Görev eklemek için input'a görev metnini yazıp ekleme butonuna basın.
- Var olan bir görevi düzenlemek için görev üzerindeki düzenle butonunu kullanın.
- Görevi tamamlandı olarak işaretlemek için checkbox/tamamla butonunu kullanın.
- Filtreleme menüsü ile aktif/tamamlanan/tüm görevleri görebilirsiniz.

## Dosya Yapısı (örnek)
- src/
  - components/  (Todo bileşenleri)
  - App.js
  - index.js
  - styles.css
- public/
- package.json
- README.md

(Projede gerçek dosya yapısına göre bu kısmı güncelleyebilirsiniz.)

## Katkıda Bulunma
1. Fork'layın
2. Yeni bir branch oluşturun: `git checkout -b feat/ozellik`
3. Değişiklikleri commit'leyin: `git commit -m "Yeni özellik"`
4. Branch'i push'layın ve Pull Request açın

Basit hatalar, iyileştirmeler veya yeni özellikler için PR'leri memnuniyetle kabul ederim.

## Lisans
Bu proje için açıkça belirtilmiş bir lisans yoksa, kullanmadan veya dağıtmadan önce lisans eklemeyi düşünün. (Örneğin MIT lisansı ekleyebilirsiniz.)

## İletişim
Sorular veya geri bildirim için repo sahibine GitHub üzerinden ulaşabilirsiniz:
https://github.com/E-rdem19

---
README dosyasını projenin mevcut yapısına göre daha da özelleştirebilirim (ör. kullanılan araç: CRA/Vite, gerçek script isimleri, localStorage implementasyonu, ekran görüntüleri). Nasıl ilerlememi istersiniz? Eğer isterseniz bu README'yi doğrudan `main` branch'e commit eden bir PR açabilirim.
