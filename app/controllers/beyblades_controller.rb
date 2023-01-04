class BeybladesController < ApplicationController
    skip_before_action :authorize
    def index
        beyblades = Beyblade.all 
        render json: beyblades, status: :ok 
    end
end
