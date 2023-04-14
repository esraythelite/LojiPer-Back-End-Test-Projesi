# LojiPer-Back-End-Test-Projesi

Programı çalıştırmadan önce bilgisayarınıze NodeJs'i kurmanız gerekmektedir https://nodejs.org/en/download linkinden ilgili indirmeyi yapabilirsiniz.

Daha sonra sırasıyla yarn üzerinden ilgili kütüphanelerin indirilmesi gerekmektedir.

Eğer yarn kurulu değil ise 
npm install --global yarn
komudu ile kurabilirsiniz.

yarn init 
komudu ile programı çalıştırabilirsiniz.
Eklenecek kütüphaneleri aşağıdaki komutlar ile yükleyebilirsiniz:

yarn add express 
yarn add nodemon 
yarn add dotenv 
yarn add mongoose
yarn add body-parser
yarn add cors
yarn add @hapi/joi
yarn add bcryptjs
yarn add jsonwebtoken

MongoDb için https://www.mongodb.com/cloud/atlas/register web sitesinde iligli adımları takip ederek database ve admin işlemlerini gerçekleştirebilirsiniz.

Uygulamada kullanıcı kaydı ve girişi için endpointler sırasıyla
http://localhost:5000/auth/register

http://localhost:5000/auth/login

Seyahat ile ilgili tüm CRUD işemleri
http://localhost:5000/trips
http://localhost:5000/trips/id=643859ed9f10cf6e607adde0
http://localhost:5000/trips/id
http://localhost:5000/trips/id
http://localhost:5000/trips

endpointlerinden yapılabilmektedir.

Kullanıcı giriş yaptıktan sonra otobüs bileti işlemleri için

http://localhost:5000/seats
http://localhost:5000/seats/id

endpointlerinde sırasıyla seçili kolduklarını görebilir ve koltuk seçebilir.S
