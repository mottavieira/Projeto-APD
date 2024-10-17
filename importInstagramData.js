function importInstagramData() {
    // ID do arquivo 'mock' JSON no Google Drive
    var fileId = '1ydqji6T44qWqKyoTNeaVyw8veNHvF_J3';
    
    // Cria uma nova planilha
    var spreadsheet = SpreadsheetApp.create('Instagram_Data');
    
    // Acessa a primeira aba da planilha
    var sheet = spreadsheet.getSheets()[0]; 
    
    // Acessa o arquivo JSON do Google Drive
    var jsonFile = DriveApp.getFileById(fileId);
    var content = jsonFile.getBlob().getDataAsString();
    
    // Transforma conteúdo do arquivo JSON em um objeto;
    var jsonData = JSON.parse(content);
    
    // Inicializa cabeçalhos da planilha
    sheet.clear();
    sheet.appendRow(['ID da Postagem', 'Legenda', 'Tipo de Mídia', 'URL da Mídia', 'Permalink', 'Curtidas', 'Comentários', 'Data e Hora']);
    
    // Itera sobre cada postagem no JSON e adiciona à planilha
    jsonData.data.forEach(function(post) {
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
    
    Logger.log('Nova planilha criada e dados importados com sucesso!');
  }
  