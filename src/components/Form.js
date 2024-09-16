import Button from './Button.js'

export default function Form(){

	return(
		<div className="grid grid-cols-2 gap-10 ">

		  <div className="forms">
		  	<label className="flex flex-col ">Nama Pasien
		      <input type="text" className="form-group" placeholder="masukan nama pasien"/>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Nomor Telpon/Whatsapp
		      <input type="number" className="form-group" placeholder="ex: 08xxxxxxxxx"/>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Kebutuhan Pasien 
		      	<select className="form-group cursor-pointer">
					<input type="text"/>
					<option value="Ford">-- Pilih Kebutuhan Pasien--</option>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
		    </label>
		  </div>

		  <div className=" forms">
		  	<label className="flex flex-col">Kebutuhan Perawatan 
		      	<select className="form-group cursor-pointer">
					<input type="text"/>
					<option value="Ford">-- Pilih --</option>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
		    </label>
		  </div>

		  <div className=" forms col-span-2">
		  	<label className="flex flex-col">Kondisi Pasien
		      	<textarea className="form-group" placeholder="Jelaskan kondisi pasien saat ini">
				  Content of the textarea.
				</textarea>
		    </label>
		  </div>

		  <div className=" forms col-span-2">
		  	<label className="flex flex-col">Alamat Lengkap Pasien
		      	<textarea className="form-group" placeholder="Masukan alamat pasien">
				  Content of the textarea.
				</textarea>
		    </label>
		  </div>

		  <div><Button title="Konsultasi Sekarang"/></div>

		</div>
		);
}