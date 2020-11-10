export default async (req, res) => {
  // Nextjs' de api klasöründeki dosyalar client tarafında gözükmüyor. Bir nevi node uygulaması gibi çalışıyor. API endpointleri gibi kullanabiliyoruz... Sadece server-side da çalışır ve client bundle da yer almaz!!

  // client tarafında kullanıcı bu route'a geldiğinde API Endpoint olarak bu response dönücek...

  // client fetch kullandım ama bir sıkıntı vermedi şimdilik!!!
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();

  res.status(200).json(data);
};