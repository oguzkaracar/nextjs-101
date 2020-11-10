import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Contact = () => {
  // If you want to access the router object inside any function component in your app, you can use the useRouter hook, take a look at the following example:

  // useRouter hook'u ile router objesine erişerek, kendi routing tanımlamalarımızı ve custom 'Link' yapımızı oluşturmamızı sağlar.
  const router = useRouter();

  return (
    <Layout>
      <h2>İletişim - Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        necessitatibus eius tempore delectus nesciunt perspiciatis consequuntur
        beatae cum, assumenda sint obcaecati totam rerum dicta commodi porro
        incidunt eveniet placeat ullam.
      </p>

      <p onClick={e => router.push('/')} className="contact-link">
        Home page
      </p>
      <p onClick={e => router.push('/about')} className="contact-link">
        About page
      </p>
    </Layout>
  );
};

export default Contact;
