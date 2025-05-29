import Card from "../components/Card"
import Footer from "../components/Footer"
import Form from "../components/Form"
import Header from "../components/Header"
import ListParticipant from "../components/List"

function ConfigurationPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-zinc-500">
      <Card>
        <Header />
        <Form />
        <ListParticipant />
        <Footer />
      </Card>
    </section>
  )
}

export default ConfigurationPage