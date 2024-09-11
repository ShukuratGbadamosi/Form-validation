import { useFormik, validateYupSchema } from 'formik'
import React from 'react'
import * as yup from 'yup'

// create the form, get data from the form, submit the form,validate the form.

const CreateProduct = () => {
    const formik = useFormik({
        initialValues:{
            productName:"",
            productPrice:"",
            description:"",
            image:""
        },
        onSubmit: (values)=>{
            console.log(values);
        },
        validationSchema: yup.object({
            productName: yup.string().required("Product Name is required"),
            productPrice: yup.string().required("Product Price is required"),
            description: yup.string().required("Description is required"),
            image: yup.string().required("Image is required")
        })
    })
    
  return (
    <>
    <div style={{paddingTop:"10px"}}>
        <form action="" onSubmit={formik.handleSubmit}>
    <input type="text" placeholder='Product Name' name="productName"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <>{formik.touched.productName && formik.errors.productName}</>
    <input type="text" placeholder='Product Price' name="productPrice" onChange={formik.handleChange} onBlur={formik.handleBlur} />
    <small>{formik.touched.productPrice && formik.errors.productPrice}</small>

    <input type="text" placeholder='Discription'name="description" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <small>{formik.touched.description && formik.errors.description}</small>

    <input type="text" placeholder='Image' name="image" onChange={formik.handleChange} onBlur={formik.handleBlur} />
    <small>{formik.touched.image && formik.errors.image}</small>

    <button type='submit' style={{backgroundColor:"purple"}}>Saved Product</button>
    </form>
    </div>
    </>
  )
}

export default CreateProduct