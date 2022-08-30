import Head from "next/head";

const Contact = () => {
  return (
    <section className="contact">

      <Head>
        <title>Robin LEBON - contact</title>
        <meta
          name="description"
          content="Informations pour me contacter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="contact__left_container">
        <p className="contact__left_container__mail">robinlebon974@gmail.com</p>
        <p className="contact__left_container__phone">+262 692 74 22 83</p>
      </div>

      <div className="contact__right_container">
      <h1 >Me contacter</h1>

      </div>
      
    </section>
  );
};

export default Contact;
