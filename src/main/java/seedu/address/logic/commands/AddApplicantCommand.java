package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.person.Person;

/**
 * Adds an applicant to the talent tracker.
 */
public class AddApplicantCommand extends AddCommand {

    public static final String COMMAND_WORD = AddCommand.COMMAND_WORD + "_applicant";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Adds an applicant to the talent tracker. "
            + AddCommand.MESSAGE_USAGE;


    public static final String MESSAGE_SUCCESS = "New applicant added: %1$s";
    public static final String MESSAGE_DUPLICATE_PERSON = "This applicant already exists in the talent tracker";


    /**
     * Creates an AddApplicantCommand to add the specified {@code Person}
     */
    public AddApplicantCommand(Person person) {
        super(person);
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (model.hasPerson(toAdd)) {
            throw new CommandException(MESSAGE_DUPLICATE_PERSON);
        }

        model.addPerson(toAdd);
        return new CommandResult(String.format(MESSAGE_SUCCESS, Messages.format(toAdd)));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof AddApplicantCommand)) {
            return false;
        }

        AddCommand otherAddCommand = (AddApplicantCommand) other;
        return toAdd.equals(otherAddCommand.toAdd);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("toAdd", toAdd)
                .toString();
    }
}
