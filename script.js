// comentário de uma linha
/*
comentário de múltiplas linhas
comentário de duas + linhas
*/
// instrução é cada linha de código | instrunção = statement 
/*valores = hello world, image.png | operadores = + - * | 
palavra-chaves = break, continue, let | espressões | comentários */
//alert
// console.log
//document.write

let roteiros =  '<b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br>'


window.onload = function ()

{
// O nome das cidades avaliadas.
let cidades = 'São Paulo, Las Vegas e Moscou.'

// O conteúdo do roteiro A de cada cidade avaliada.
let conteudoA = '<br>Região: Avenida Paulista - MASP, Parque Trianon, Rua Augusta;</br> Região: Las Vegas Boulevard South - Fonte do Bellagio, Principais Cassinos, Madame Tussauds; </br> Região: Praça Vermelha - Museu Histórico do Estado, Catedral de São Basílico, Mausoléu de Lênin.'

// Quantos locais são citados no roteiro A de cada cidade.
let locaisRoteiroA = [['MASP', 'Parque Trianon', 'Rua Augusta'], ['Fonte do Bellagio', 'Principais Cassinos', 'Madame Tussauds'], ['Museu Histórico do Estado', 'Catedral de São Basílico', 'Mausoléu de Lênin']]

// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
let centroSaoPaulo = 'Catedral da Sé, Pátio do Colégio, Rua Augusta.'

// O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas.
let downtown_LasVegas = 'Fremont, Las Vegas Art Museum, Museu Nacional do Crime Organizado.'


{
document.write ('<b> O nome das cidades avaliadas:</b>'  + ' '+ cidades + '<br>');
document.write ('<b> O conteúdo do roteiro A de cada cidade avaliada:</b>' + ' ' + conteudoA + '<br>');
document.write ('<b> Quantos locais são citados no roteiro A de cada cidade:</b>' + ' ' + locaisRoteiroA.length + '<br>');
document.write ('<b> O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo</b>' + ' ' + centroSaoPaulo + '<br>');
document.write ('<b> O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas:</b>' + ' ' + downtown_LasVegas + '<br>');
}
}
