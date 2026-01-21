function Collection() {
    const items = [
        { id: 1, src: '/collection/forteen.jpg', className: 'item-1' },
        { id: 2, src: '/collection/second.png', className: 'item-2' },
        { id: 3, src: '/collection/third.png', className: 'item-3' },
        { id: 4, src: '/collection/therteen.jpg', className: 'item-4' },
        { id: 5, src: '/collection/fifth.png', className: 'item-5' },
        { id: 6, src: '/collection/sixth.png', className: 'item-6' },
        { id: 7, src: '/collection/seven.png', className: 'item-7' },
        { id: 8, src: '/collection/eight.png', className: 'item-8' },
        { id: 9, src: '/collection/twelve.jpg', className: 'item-9' },
        { id: 10, src: '/collection/ten.png', className: 'item-10' },
    ];

    return (
        <div className="collection-section">
            <div className="collection-grid" id="collectionGrid">
                {items.map((item) => (
                    <div key={item.id} className={`collection-item ${item.className}`}>
                        <img src={item.src} alt={`Collection ${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collection;
