const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#entry-title').value.trim();
    const description = document.querySelector('#entry-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/entry`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/entry/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-entry-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.entry-list')
    .addEventListener('click', delButtonHandler);