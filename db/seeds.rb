puts "beging seeding ...."

User.all.destroy_all
Genre.all.destroy_all
Song.all.destroy_all 
Comment.all.destroy_all
Favorite.all.destroy_all


dem = User.create(username: "Demo", password_digest: "demo")
max = User.create(username: "Maximax", password_digest: "max1")
ger = User.create(username: "Gerald", password_digest: "gerald1")
nik = User.create(username: "Nikki", password_digest: "nikki1")
chr = User.create(username: "Christelle", password_digest: "christie1")

rap = Genre.create!(genre_name: "Hip-Hop/Rap")
k = Genre.create!(genre_name: "Kompa")
Genre.create!(genre_name: "R&B")
rag = Genre.create!(genre_name: "Reggae")
cont = Genre.create!(genre_name: "Contemporary")


song1 = Song.create!(title: "Lord, I need you" , img_url: "https://pbs.twimg.com/media/BId5rQICMAAfErg.jpg" , user_id: chr.id, genre_id: cont.id)
song2 = Song.create!(title: "M'ap Marye" , img_url: "https://i1.sndcdn.com/artworks-000157378894-0mfzyi-t500x500.jpg", user_id: max.id, genre_id: k.id)
song3 = Song.create!(title: "Start Over" , img_url: "https://images.genius.com/9ff72ecce321980c87eed95e7304bd5f.1000x1000x1.jpg", user_id: dem.id, genre_id: rap.id)
song4 = Song.create!(title: "Lots of Love", img_url: "https://www.musiconvinyl.com/fotos/3910_foto1_product_xl.jpg", user_id: nik.id, genre_id: rag.id)
song5 = Song.create!(title: "My boo", img_url: "https://i.ytimg.com/vi/t4z6M7Tbpk0/hqdefault.jpg", user_id: nik.id, genre_id: Genre.third.id)
song6 = Song.create!(title: "Middle Child", img_url: "https://studybreaks.com/wp-content/uploads/2019/02/j.cole2_.jpg" , user_id: ger.id, genre_id: rap.id)
song7 = Song.create!(title: "Pitit Deyo", img_url: "https://i1.sndcdn.com/artworks-000200587487-fcyyop-t500x500.jpg", user_id: dem.id, genre_id: k.id)
song8 = Song.create!(title: "Kenbe'l la", img_url: "https://direct.rhapsody.com/imageserver/images/Alb.269570892/500x500.jpg", user_id: max.id, genre_id: k.id)
song9 = Song.create!(title: "Break every chain", img_url: "https://images-na.ssl-images-amazon.com/images/I/716x8wAvBxL._SL1500_.jpg", user_id: chr.id, genre_id: cont.id)




Favorite.create!(user_id: max.id, song_id: song1.id)
Favorite.create!(user_id: max.id, song_id: song9.id)
Favorite.create!(user_id: max.id, song_id: song3.id)
Favorite.create!(user_id: chr.id, song_id: song3.id)
Favorite.create!(user_id: chr.id, song_id: song5.id)
Favorite.create!(user_id: dem.id, song_id: song2.id)
Favorite.create!(user_id: dem.id, song_id: song6.id)
Favorite.create!(user_id: dem.id, song_id: song9.id)
Favorite.create!(user_id: dem.id, song_id: song8.id)
Favorite.create!(user_id: ger.id, song_id: song8.id)
Favorite.create!(user_id: ger.id, song_id: song4.id)
Favorite.create!(user_id: ger.id, song_id: song3.id)
Favorite.create!(user_id: nik.id, song_id: song1.id)
Favorite.create!(user_id: nik.id, song_id: song9.id)
Favorite.create!(user_id: nik.id, song_id: song2.id)
Favorite.create!(user_id: nik.id, song_id: song3.id)
Favorite.create!(user_id: max.id, song_id: song6.id)
Favorite.create!(user_id: chr.id, song_id: song4.id)
Favorite.create!(user_id: chr.id, song_id: song3.id)
Favorite.create!(user_id: ger.id, song_id: song7.id)



Comment.create!(comment_body: 'yo, where do these guys get them lyrics', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'oh man, this is thriller', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'wow, simply wow!!!', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'omggggg', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'please do not let go', user_id: User.all.sample.id, song_id: song1.id)
Comment.create!(comment_body: 'yes the victory belongs to Jesus', user_id: User.all.sample.id, song_id: Song.first.id)
Comment.create!(comment_body: 'best song ever', user_id: chr.id, song_id: song3.id)
Comment.create!(comment_body: 'I have this on repeat', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'fok mwen marye kamen', user_id: max.id, song_id: song2.id)
Comment.create!(comment_body: 'you better invite me, lol', user_id: nik.id, song_id: song2.id)
Comment.create!(comment_body: 'my dream song', user_id: User.all.sample.id, song_id: song8.id)
Comment.create!(comment_body: 'i love this song', user_id: User.all.sample.id, song_id: song3.id)
Comment.create!(comment_body: 'thumbs up', user_id: chr.id, song_id: song4.id)
Comment.create!(comment_body: 'the best of the best', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'this is lit', user_id: dem.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'i have to blast this one', user_id: ger.id, song_id: song6.id)
Comment.create!(comment_body: 'omg i love hearing this song', user_id: nik.id, song_id: song1.id)
Comment.create!(comment_body: 'why not!!!', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'break the chains Jesus, please please please!!!', user_id: nik.id, song_id: song9.id)

puts "done seeding!!!"
