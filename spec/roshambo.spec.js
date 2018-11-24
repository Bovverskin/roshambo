const { Roshambo } = require('./spec.helper');

describe('Roshambo', function() {
    let roshambo = new Roshambo();

    it('should return "YOU WIN! The Computer chose paper"', () => {
        expect(roshambo.play("scissors")).to.eql("WINNER! The Computer chose paper")
    })

    it('should return "LOSER! The Computer chose paper"', () => {
        expect(roshambo.play("rock")).to.eql("LOSER! The Computer chose Paper")
    })

    it('should return "TIE! The Computer chose paper"', () => {
        expect(roshambo.play("paper")).to.eql("TIE! The Computer chose paper")
    })

});