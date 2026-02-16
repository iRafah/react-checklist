import './empty-state.style.css'

export function EmptyState() {
    return (
        <section className="empty-state">
            <p>There are no tasks saved. Add to start!</p>
            <img src="empty.png" alt=""/>
        </section>
    )
}