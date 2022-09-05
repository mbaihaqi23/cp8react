export default function CreatePosts() {
  

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container"> 
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                <form className="box">
                <h1>Create Post</h1>
                    <div className="field mt-5">
                            <label className="label">Title</label>
                            <div className="controls">
                                <input className="input" placeholder="Title" />
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Image</label>
                            <div className="controls">
                                <input className="input" placeholder="Link url image from another web" />
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Body</label>
                            <div className="controls">
                                <input className="textarea" placeholder="Post content" />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Submit</button>
                        </div>
                </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
