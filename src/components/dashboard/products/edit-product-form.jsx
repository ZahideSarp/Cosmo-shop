"use client";

import CancelButton from "@/components/common/form-controls/cancel-button";
import SubmitButton from "@/components/common/form-controls/submit-button";
import { useFormState } from "react-dom";
import { Alert, Form } from "react-bootstrap";

const EditProductForm = ({ product }) => {
    const { title, description, price, category, image } = product;
	return (
		<>
			<Form >
				<input type="hidden" name="id" defaultValue={product.id} />
				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control
						name="title"
						type="text"
						defaultValue={product.title}
					
					/>
					<Form.Control.Feedback type="invalid">
						{title}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Description</Form.Label>
					<Form.Control
						name="description"
						as="textarea"
						rows={3}
						defaultValue={product.description}
					
					/>
					<Form.Control.Feedback type="invalid">
						{description}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Price</Form.Label>
					<Form.Control
						name="price"
						type="number"
						defaultValue={product.price}
					
					/>
					<Form.Control.Feedback type="invalid">
						{price}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Category</Form.Label>
					<Form.Select
						name="category"
						defaultValue={product.category}
						
					>
						<option value="">Select</option>
						<option value="Home">Home</option>
						<option value="Computers">Computers</option>
						<option value="Clothing">Clothing</option>
						<option value="Kids">Kids</option>
						<option value="Grocery">Grocery</option>
					</Form.Select>
					<Form.Control.Feedback type="invalid">
						{category}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Image</Form.Label>
					<Form.Control
						name="image"
						type="text"
						defaultValue={product.image}
						
					/>
					<Form.Control.Feedback type="invalid">
						{image}
					</Form.Control.Feedback>
				</Form.Group>

				{/* bu butonu ayrı bir component yapmayınca pending durumunu gösteremiyorum */}

				<SubmitButton title="Update" />
				<CancelButton />
			</Form>
		</>
	);
};

export default EditProductForm;
