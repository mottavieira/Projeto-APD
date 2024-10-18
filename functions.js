function consultAPI() {
  // Simulação de um objeto JSON retornado pela Instagram Graph API
  var simulatedResponse = {
    "data": [
      {
        "id": "17895695668004550",
        "caption": "Primeira postagem simulada",
        "media_type": "IMAGE",
        "media_url": "https://example.com/image1.jpg",
        "permalink": "https://instagram.com/p/CGTNK4KJ4XO/",
        "like_count": 120,
        "comments_count": 10,
        "timestamp": "2024-10-01T12:34:56+0000"
      },
      {
        "id": "17895695668004551",
        "caption": "Segunda postagem simulada",
        "media_type": "VIDEO",
        "media_url": "https://example.com/video1.mp4",
        "permalink": "https://instagram.com/p/CGTNK4KJ4XP/",
        "like_count": 250,
        "comments_count": 25,
        "timestamp": "2024-10-02T14:20:30+0000"
      },
      {
        "id": "17895695668004552",
        "caption": "Terceira postagem simulada",
        "media_type": "CAROUSEL_ALBUM",
        "media_url": "https://example.com/carousel1.jpg",
        "permalink": "https://instagram.com/p/CGTNK4KJ4XQ/",
        "like_count": 300,
        "comments_count": 15,
        "timestamp": "2024-10-03T16:10:45+0000"
      }
    ]
  };
  
  return simulatedResponse;
}

function saveInstagramDataToSheet() {
  // Chama a função, que chama a API
  var apiResponse = consultAPI();
  
  // Cria uma nova planilha chamada "Instagram Data"
  var spreadsheet = SpreadsheetApp.create('Instagram_Data');
  var sheet = spreadsheet.getActiveSheet();
  
  // Adiciona cabeçalhos à planilha
  sheet.appendRow(['ID da Postagem', 'Legenda', 'Tipo de Mídia', 'URL da Mídia', 'Permalink', 'Curtidas', 'Comentários', 'Data e Hora']);
  
  // Itera sobre o objeto e adiciona cada postagem à planilha
  apiResponse.data.forEach(function(post) {
    sheet.appendRow([
      post.id,
      post.caption,
      post.media_type,
      post.media_url,
      post.permalink,
      post.like_count,
      post.comments_count,
      post.timestamp
    ]);
  });
}
