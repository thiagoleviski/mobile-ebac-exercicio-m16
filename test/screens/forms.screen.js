class AccessForms {
    get forms(){
        return $('content-desc:Forms')
    }

    async goToFormsPage(){
        this.forms.click()
    }
}

module.exports = new AccessForms()

class TypeForms {
    get input(){
        return $('content-desc:text-input')
    }

    get switch(){
        return $('content-desc:switch')
    }

    get dropwdown(){
        return $('text:Select an item...')
    }

    get list(){
        return $('index:2')
    }

    get button(){
        return $('text:Active')
    }

    async insertInfos(){
        this.input.click().type('Something')
        this.switch.click()
        this.dropwdown.click()
        this.list.click()
        this.button.click()
    }
}

module.exports = new TypeForms()