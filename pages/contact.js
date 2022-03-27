import Head from "next/head";

const Contact = () => {
  return (
    <div className="contact-container">

      <Head>
        <title>Robin LEBON - contact</title>
        <meta
          name="description"
          content="Informations pour me contacter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>touch Contact.mail</h1>
      <div className="contact">
        <p> tél: 0692 74 22 83</p>
        <a href="mailto:robinlebon974@gmail.com">
          <p>mail: robinlebon974@gmail.com </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
