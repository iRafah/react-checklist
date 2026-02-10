import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoForm } from "./components/ToDoForm"
import { ToDoGroup } from "./components/ToDoGroup"
import ToDoContext from "./components/ToDoProvider/ToDoContext"

function App() {

  const [showDialog, setShowDialog] = useState(false)

  const { todos, addTodo } = use(ToDoContext)

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    toggleDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Study Plan
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <ToDoGroup
            heading="To study"
            items={todos.filter(t => !t.completed)}
          />
          <ToDoGroup
            heading="Finished"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={handleFormSubmit}></ToDoForm>
            </Dialog>

            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
