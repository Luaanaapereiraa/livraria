import { CardDeck, Card, Blockquote, DropdownButton, Dropdown, button } from 'react-bootstrap';
import { Autor, Title } from './styledCard';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

const ContainerCard = ({ book, onClickDelete }) => (
  
  



    <blockquote>

        <Card border="info" style={{ width: '18rem' }}>


            <div className="book-card">
                <Card.Img variant="top"

                    src={book.imageUrl}
                    className="book-card__image"
                />
                <Card.Body>
                    <div>
                        <Card.Title>
                            <Title className="book-card__title">{book.title} </Title>
                        </Card.Title>
                        <Card.Text>
                            <Autor className="book-card__autor">{book.autor} </Autor>
                        </Card.Text>

                        <Card.Footer>

                            <spam className="book-card__price">R$ {book.price}</spam>
                        </Card.Footer>
                        <DropdownButton id="dropdown-basic-button" title="Opçoes">
                            <Dropdown.Item  >
                                <Link to={`/edit/${book.id}`}> Editar </Link> </Dropdown.Item>
                            <Dropdown.Item>
                                <button onClick={onClickDelete}>Excluir</button>

                            </Dropdown.Item>
                        </DropdownButton>
                    </div>

                </Card.Body>
            </div>

        </Card>
    </blockquote>
  
)
export default ContainerCard;