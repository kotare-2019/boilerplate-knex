
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1,  user_id: 99901, url: 'http://www.example.com/boy.php', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 2,  user_id: 99902, url: 'http://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 3,  user_id: 99903, url: 'http://branch.example.net/appliance?berry=act', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 4,  user_id: 99904, url: 'http://example.com/bat?bed=basin', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 5,  user_id: 99905, url: 'http://www.example.edu/?birthday=adjustment', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 6,  user_id: 99906, url: 'http://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 7,  user_id: 99907, url: 'https://example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 8,  user_id: 99908, url: 'https://bird.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 9,  user_id: 99909, url: 'http://www.example.com/amount?birds=bait', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 10, user_id: 99910, url: 'http://exa vbbnmple.net/activity/breath.aspx', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 11, user_id: 99911, url: 'https://www.example.com/activity/beef.aspx', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 12, user_id: 99912, url: 'https://bath.example.com/balance?belief=advice&act=bead', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 13, user_id: 99913, url: 'http://example.com/books#attack', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 14, user_id: 99914, url: 'http://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 15, user_id: 99915, url: 'http://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 16, user_id: 99916, url: 'http://baby.example.com/behavior/attraction.html', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 17, user_id: 99917, url: 'http://example.com/basketball/blow.php', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 18, user_id: 99918, url: 'https://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 19, user_id: 99919, url: 'https://example.com/#belief', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 20, user_id: 99920, url: 'https://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 21, user_id: 99921, url: 'http://behavior.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 22, user_id: 99922, url: 'https://www.example.com/blow/bag', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 23, user_id: 99923, url: 'https://boy.example.com/bells.php', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 24, user_id: 99924, url: 'https://bone.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 25, user_id: 99925, url: 'http://bell.example.com/bikes.php', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'},
        {id: 26, user_id: 99926, url: 'https://www.example.com/', profile_picture: 'https://api.adorable.io/avatars/285/avatar@adorable.io.png'}
      ])
    })
}

