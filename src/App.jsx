import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { EmptyState } from "./components/EmptyState"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoForm } from "./components/ToDoForm"
import { ToDoGroup } from "./components/ToDoGroup"
import ToDoContext from "./components/ToDoProvider/ToDoContext"

function App() {

  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo } = use(ToDoContext)

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData)
    } else {
      addTodo(formData)
    }
    closeFormTodoDialog()
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
          {todos.length === 0 && <EmptyState />}
          <ToDoGroup
            heading="Finished"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              ></ToDoForm>
            </Dialog>

            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
