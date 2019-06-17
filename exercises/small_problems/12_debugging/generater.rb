copy_and_paste = <<~NAMES
1	Word Ladder	Not completed
2	Reserved Keywords	Not completed
3	Random Recipe Generator	Not completed
4	Task List	Not completed
5	Range	Not completed
6	Member Directory	Not completed
7	Molecules	Not completed
8	Glory!	Not completed
9	Grade Analysis	Not completed
10	Weekday Classes	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
