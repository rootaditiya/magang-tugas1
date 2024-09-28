import {useFormik} from 'formik'
import * as yup from 'yup'
import React from 'react'

export default function Form(){

	const consult = (values) =>{
		const phoneNumber = "6281378798069"; 
		const message = `
		  *Halo saya ingin Konsultasi*\n\n• *Nama:* ${values.pasienName.trim()}\n• *No Hp:* ${values.contactNumber.trim()}\n• *Kondisi Pasien:* ${values.pasienRequired.trim()}\n• *Kebutuhan Pasien:* ${values.susterRequired.trim()}\n• *Kebutuhan Perawat:* ${values.condition.trim()}\n• *Alamat Pasien:* ${values.address.trim()}`.trim();

		window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message.trim())}`, '_blank');
	}

	const formik = useFormik({
		initialValues: {
			pasienName: '',
			contactNumber: '',
			pasienRequired: '',
			susterRequired: '',
			condition: '',
			address: '',
		},
		onSubmit: consult,
		validationSchema: yup.object().shape({
			pasienName: yup.string().required().min(3).max(50),
			contactNumber: yup.string().required().max(12),
			pasienRequired: yup.string().required().min(3).max(50),
			susterRequired: yup.string().required().min(3).max(50),
			condition: yup.string().required().min(3).max(100),
			address: yup.string().required().min(3).max(100),
		})
	});

	const handleForm = (event) => {
		const {target} = event
		formik.setFieldValue(target.name, target.value)
	}

	return(
		<div className="w-full bg-white">
			<div className="form-wrapper flex p-0 ">
				<form onSubmit={formik.handleSubmit} className="flex flex-col min-w-full space-y-[1rem] justify-center p-0 sm:p-5 min-w-full">
					<div className="form-control flex flex-col gap-5 lg:flex-row ">
						<label className="lg:basis-1/2">Masukan nama Pasien:
						<input type="text" className={formik.values.pasienName ? 'text-appskep-dark' : 'text-appskep-secondary/50'} placeholder="Masukan nama pasien" onChange={handleForm} name='pasienName'/>
						{formik.errors.pasienName && <div className="text-red-500 text-sm">{formik.errors.pasienName}</div>}
						</label>

						<label className="lg:basis-1/2">Nomor HP:
						<input type="number" className={formik.values.contactNumber ? 'text-appskep-dark-' : 'text-appskep-secondary/50'} placeholder="ex: 08xxxxxxxxx" onChange={handleForm} name='contactNumber'/>
						{formik.errors.contactRequired && <div className="text-red-500 text-sm">{formik.errors.contactNumber}</div>}
						</label>
					</div>

					<div className="form-control flex flex-col gap-5 lg:flex-row">
						<label className="lg:basis-1/2">kebutuhan pasien:
						<select className={`${formik.values.pasienRequired ? 'text-appskep-dark' : 'text-appskep-secondary/50'} cursor-pointer `} onChange={handleForm} name='pasienRequired'>
						    <option value="">-- Pilih Kebutuhan Pasien--</option>
						    <option value="option1">option 1</option>
						    <option value="option2">option 2</option>
						    <option value="option3">option 3</option>
						</select>
						{formik.errors.pasienRequired && <div className="text-red-500 text-sm">{formik.errors.pasienRequired}</div>}

						</label>

						<label className="lg:basis-1/2">Kebutuhan akan Perawat:
						<select  className={`${formik.values.susterRequired ? 'text-appskep-dark' : 'text-appskep-secondary/50'} cursor-pointer `} onChange={handleForm} name='susterRequired'>
						    <option value="">-- Pilih --</option>
						    <option value="option1">option 1</option>
						    <option value="option2">option 2</option>
						    <option value="option3">option 3</option>
						</select>
						{formik.errors.susterRequired && <div className="text-red-500 text-sm">{formik.errors.susterRequired}</div>}

						</label>
					</div>

					
					<div className="form-control">
						<label>Masukkan kondisi pasien:</label>
						<textarea className="" placeholder="Jelaskan kondisi pasien saat ini" onChange={handleForm} name='condition'></textarea>
						{formik.errors.condition && <div className="text-red-500 text-sm">{formik.errors.condition}</div>}
					</div>

					<div className="form-control">
						<label>Alamat pasien:</label>
						<textarea className="" placeholder="Masukan alamat pasien" onChange={handleForm} name='address'></textarea>
						{formik.errors.address && <div className="text-red-500 text-sm">{formik.errors.address}</div>}
					</div>

					<div className="mb-0 mt-auto mx-0">
						<button type="submit" className="flex items-center justify-center px-5 py-4 sm:px-6 sm:py-4 bg-appskep-primary hover:bg-appskep-primary-hover text-white text-md sm:text-lg rounded-full font-semibold">Konsultasi Sekarang</button>
					</div>
				</form>
			</div>
		</div>
		);
}